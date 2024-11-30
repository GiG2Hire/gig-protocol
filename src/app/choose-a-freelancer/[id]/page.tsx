import FrameComponent from "../../components/choose-a-freelancer/frame-component";
import styles from "./ScreenchatApplicants.module.css";
import GigDescription from "../../components/choose-a-freelancer/gig-description";
import { prisma } from "../../lib/db";
import { getRoleFromPayload, getUserIdFromPayload } from "../../actions/login";

export type GigHeaderType = {
  className?: string;
};

const ScreenchatApplicants = async ({ params }: { params: any }) => {
  const gigId: number = Number(params.id);
  let gig;
  let messages: ChatMessage[] = [];
  const currentUser: number = (await getUserIdFromPayload()) as number;
  let chatId: string = "";
  const currUserRole: string = (await getRoleFromPayload()) as string;
  const hasSubmitted = true;
  let freelancerId: number = -1;
  let applicants: GigOffer[] = [];
  const applicantUsersMap: Map<number, User> = new Map();

  const getGigDescription = async () => {
    gig = await prisma.gig.findUnique({
      where: { gigId: gigId },
      include: { gig_task: true, gig_offer: true },
    });
    console.log(gig);
    freelancerId = gig?.gig_offer[0].freelancerId as number;
    applicants = gig?.gig_offer as GigOffer[];
    let applicantUserIds: number[] = [];
    applicants.forEach((offer) => {
      applicantUserIds.push(offer.freelancerId);
    });
    let offerFreelancers: User[] = (await prisma.user.findMany({
      where: {
        userId: {
          in: applicantUserIds,
        },
      },
    })) as User[];
    console.log(offerFreelancers);
    offerFreelancers.forEach((freelancer: User) => {
      applicantUsersMap.set(freelancer.userId, freelancer);
    });
  };

  await Promise.all([getGigDescription()]);

  return (
    <div className={styles.screenchatApplicants}>
      <FrameComponent />
      <section className={styles.gigHeaderWrapper}>
        <GigDescription
          applicantUsersMap={applicantUsersMap}
          applicants={applicants}
          gig={gig}
          clientId={currentUser}
          freelancerId={freelancerId}
        />
      </section>
    </div>
  );
};

export default ScreenchatApplicants;
