"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./btnicon-text.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export type BtniconTextType = {
  className?: string;
  iconHide?: boolean;
  button?: string;
  iconeditSquare: string;

  /** Variant props */
  buttonVariables?: "red-m-def" | "navy-st-m-def" | "navy-m-def";

  /** Style props */
  btniconTextFlex?: CSSProperties["flex"];
  btniconTextAlignSelf?: CSSProperties["alignSelf"];
};

const BtniconText: NextPage<BtniconTextType> = ({
  className = "",
  buttonVariables = "red-m-def",
  iconHide = false,
  button = "Cancel",
  btniconTextFlex,
  btniconTextAlignSelf,
  iconeditSquare,
  offer,
}) => {
  const btniconTextStyle: CSSProperties = useMemo(() => {
    return {
      flex: btniconTextFlex,
      alignSelf: btniconTextAlignSelf,
    };
  }, [btniconTextFlex, btniconTextAlignSelf]);

  const router = useRouter();

  let statusSuccess: boolean = false;

  const getApproveFreelancerResponse = async (offer: GigOffer) => {
    const response = await fetch("/api/gig/accept-offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        offerId: offer.offerId,
        gigId: offer.gigId,
        freelancerId: offer.freelancerId,
        clientId: offer.clientId,
      }),
    });
    statusSuccess = response.status == 200;
    return response.json();
  };

  const approveFreelancer = async (offer: GigOffer) => {
    toast
      .promise(getApproveFreelancerResponse(offer), {
        loading: "Approving Freelancer...",
        success: (res) => {
          if (!statusSuccess) {
            throw new Error(res.message);
          }
          return <b>Freelacer Approved Successfully!!</b>;
        },
        error: (err) => <b>{err.message}</b>,
      })
      .then(() => {
        if (statusSuccess) {
          router.push("/chat/" + offer.chatId);
        }
      });
  };

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-buttonVariables={buttonVariables}
      style={btniconTextStyle}
      onClick={() => {
        approveFreelancer(offer);
      }}
    >
      {iconHide && (
        <Image
          className={styles.iconeditSquare}
          width={24}
          height={24}
          alt=""
          src={iconeditSquare}
        />
      )}
      <b className={styles.button}>{button}</b>
    </button>
  );
};

export default BtniconText;
