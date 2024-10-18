"use client";
import type { NextPage } from "next";
import HeaderSpacer from "@/src/app/components/header-spacer";
import styles from "./post-a-job.module.css";
import { ethers } from "ethers";
import CCIPLendingProtocolAbi from "@/src/constants/abi/CCIPLendingProtocol.json";
import contractAddresses from "@/src/constants/contractAddresses.json";
import { client } from "../lib/client";
import { createGig } from "../actions/create-gig";
import { useActiveAccount } from "thirdweb/react";
import "./calendar.css";
import {
  defineChain,
  getContract,
  prepareContractCall,
  sendTransaction,
  waitForReceipt,
} from "thirdweb";
import { abi } from "../actions/constantAbi";
import { erc20Abi } from "@/src/constants/erc20";
import { create } from "domain";
import { GIG_TASK_STATUS } from "@/src/constants/appConstants";
import { useState } from "react";
import Calendar from "react-calendar";
import ReviewJobOffer from "../components/review-job-offer";

const PostAJob = () => {
  const account = useActiveAccount();
  const [gigTitle, setGigTitle] = useState("");
  const [gigDescription, setGigDescription] = useState("");

  const [taskInput, setTaskInput] = useState("");
  const mockTasks = [
    "Include graphics on the PNLs",
    "Yellow and Black for the UI",
    "Hamsters animations",
    "Include historical swaps",
    "Include socials section",
    "Include coin tracker",
  ];
  const [tasks, setTasks] = useState<GigTask[]>([]);
  let taskChunks: string[] = [];

  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [projectBudget, setProjectBudget] = useState<number>(0);

  const jobCategories = [
    { id: 1001, imgSrc: "/developer-mode-tv.svg", text: "Development & IT" },
    { id: 1002, imgSrc: "/design-services.svg", text: "Design & Creative" },
    { id: 1003, imgSrc: "/psychology.svg", text: "AI services" },
    { id: 1004, imgSrc: "/store.svg", text: "Sales & Marketing" },
    {
      id: 1005,
      imgSrc: "/support-agent.svg",
      text: "Admin & Customer Support",
    },
    { id: 1006, imgSrc: "/translate.svg", text: "Writing & Translation" },
  ];

  const [activeJobCategory, setActiveJobCategory] = useState(null);

  function addTask() {
    if (taskInput.trim() == "") {
      return;
    }
    let task: GigTask = {
      description: taskInput,
      status: GIG_TASK_STATUS.PENDING,
    };
    setTasks((prev) => [...prev, task]);
    setTaskInput("");
    console.log(tasks);
  }

  async function approveUSDCandOpenProposal() {
    console.log("Trying to obtain approval from client....");
    const chainId = 84532;
    const rpcUrl = process.env.NEXT_PUBLIC_BASE_RPC_URL;
    const addressProtocol = "0x956b52eB371037CD8F2Ff5DF4Ac21BF0020226FB";
    const amount = 1000000;
    const usdcToken = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";

    // const account = useActiveAccount();

    const selectedChain = defineChain({
      id: chainId,
      rpc: rpcUrl,
    });

    const lendingContract = getContract({
      address: addressProtocol,
      chain: selectedChain,
      abi: abi,
      client,
    });

    const usdcContract = getContract({
      address: usdcToken,
      chain: selectedChain,
      abi: erc20Abi,
      client,
    });

    // get approval from Client to transfer gig budget
    const tx = prepareContractCall({
      contract: usdcContract,
      method: "function approve(address _spender, uint256 _value)",
      params: [addressProtocol, BigInt(amount)],
    });

    const { transactionHash } = await sendTransaction({
      account: account,
      transaction: tx,
    });

    const receipt = await waitForReceipt({
      client: client,
      chain: selectedChain,
      transactionHash: transactionHash,
      maxBlocksWaitTime: 6,
    });

    if (receipt.status != "success") {
      return;
    }

    console.log("Transaction approval confirmed: ");
    setProjectBudget(amount);

    openProposal();

    // amount = gig budget, usdcToken = base , destinationChain = Optimism
    // const txCall = prepareContractCall({
    //   contract: lendingContract,
    //   method:
    //     "function openProposal(uint256 _amount, address _usdcToken, uint64 _destinationChainSelector)",
    //   params: [BigInt(amount), usdcToken, BigInt("5224473277236331295")],
    // });

    // console.log("Sending Transaction to chain");
    // // front it will be showing tx hash or link for ccip explorer with this hash
    // const { transactionHash } = await sendTransaction({
    //   account: account,
    //   transaction: txCall,
    // });

    // return transactionHash;
  }

  async function openProposal() {
    console.log("Trying to obtain approval from client....");
    const chainId = 84532;
    const rpcUrl = process.env.NEXT_PUBLIC_BASE_RPC_URL;
    const addressProtocol = "0x956b52eB371037CD8F2Ff5DF4Ac21BF0020226FB";
    const amount = 1000000;
    const usdcToken = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";

    // const account = useActiveAccount();

    const selectedChain = defineChain({
      id: chainId,
      rpc: rpcUrl,
    });

    const lendingContract = getContract({
      address: addressProtocol,
      chain: selectedChain,
      abi: abi,
      client,
    });

    // amount = gig budget, usdcToken = base , destinationChain = Optimism
    const txCall = prepareContractCall({
      contract: lendingContract,
      method:
        "function openProposal(uint256 _amount, address _usdcToken, uint64 _destinationChainSelector)",
      params: [BigInt(amount), usdcToken, BigInt("5224473277236331295")],
    });

    console.log("Sending Transaction to chain");
    // front it will be showing tx hash or link for ccip explorer with this hash
    const { transactionHash } = await sendTransaction({
      account: account,
      transaction: txCall,
    });

    console.log(transactionHash);

    const { receipt } = await waitForReceipt({
      client: client,
      chain: selectedChain,
      transactionHash: transactionHash,
    });

    if (receipt.status != "success") {
      return;
    }

    // return transactionHash;
  }

  const openProposalAndCreateGig = (formData: FormData) => {
    approveUSDCandOpenProposal();
    createGig(formData, deliveryDate, projectBudget, activeJobCategory, tasks);
  };

  return (
    <div className={styles.postAJob}>
      {/* <HeaderSpacer /> */}
      <main className={styles.footerContentWrapper}>
        <section className={styles.footerContent}>
          <div className={styles.frameParent}>
            <button className={styles.postAGigWrapper}>
              <a className={styles.postAGig}>Post a GiG</a>
            </button>
            <h1 className={styles.hireJustVerified}>
              Hire just verified freelancers.
            </h1>
          </div>
          <form action={openProposalAndCreateGig}>
            <div className={styles.jobForm}>
              <div className={styles.formFields}>
                <div className={styles.titleField}>
                  <div className={styles.titleInput}>
                    <b className={styles.titleIcon}>1</b>
                  </div>
                  <b className={styles.headlineForYour}>
                    Headline for your Job post
                  </b>
                </div>
                <div className={styles.nameField}>
                  <div className={styles.nameInput}>
                    <b className={styles.addACatchy}>
                      Add a catchy name for your Job Post.
                    </b>
                    <input
                      className={styles.textInput}
                      placeholder="Add GiG title here"
                      type="text"
                      name="gigTitle"
                      onChange={(e) => setGigTitle(e.target.value)}
                    />
                  </div>
                  <div className={styles.titleExample}>
                    <b className={styles.exampleTitles}>Example titles:</b>
                    <p className={styles.buildAResponsiveContainer}>
                      <div className={styles.buildAResponsiveDappToTra}>
                        <li className={styles.buildAResponsive}>
                          Build a responsive dApp to trade Pokemonsta cards.
                        </li>
                        <li className={styles.designAnUi}>
                          Design an UI for a cooking social media.
                        </li>
                        <li>Create a video ad for YouClip Shorts.</li>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.descriptionField}>
                <div className={styles.descriptionInput}>
                  <div className={styles.descriptionIcon}>
                    <b className={styles.descriptionLabel}>2</b>
                  </div>
                  <b className={styles.describeYourJob}>
                    Describe your Job post
                  </b>
                </div>
                <div className={styles.descriptionExample}>
                  <div className={styles.exampleDescription}>
                    <b className={styles.addADescription}>
                      Add a description for your Job post.
                    </b>
                    <textarea
                      className={styles.textInputParent}
                      name="description"
                      onChange={(e) => setGigDescription(e.target.value)}
                    >
                      {/* <div className={styles.textInput1}>
                        <div className={styles.searchInGlobal}>
                          Add GiG title here
                        </div>
                      </div> */}
                    </textarea>
                  </div>
                  <div className={styles.categorySelection}>
                    <b className={styles.exampleDescription1}>
                      Example Description:
                    </b>
                    <blockquote className={styles.lookingForAn}>
                      “Looking for an experienced Freelance that can deliver in
                      a timely manner a clean and well designed Dashboard, to
                      manage, swap and keep tracks of multiple Hamster Coins, we
                      are a team of VCs looking to find long term
                      collaborations. Messages are open on the global chat”
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className={styles.taskField}>
                <div className={styles.taskInput}>
                  <div className={styles.taskIcon}>
                    <b className={styles.taskLabel}>3</b>
                  </div>
                  <b className={styles.chooseYourJob}>
                    Choose your Job Category
                  </b>
                </div>
                <div className={styles.taskInstructions}>
                  {jobCategories.map((category) => (
                    <div
                      key={category.id}
                      className={`${styles.btnDevit} ${activeJobCategory === category.id
                        ? styles.activeBtnDevit
                        : ""
                        }`}
                      onClick={() => {
                        setActiveJobCategory(category.id);
                      }}
                    >
                      <img
                        className={styles.developerModeTvIcon}
                        alt=""
                        src={category.imgSrc}
                      />
                      <div className={styles.developmentIt}>
                        {category.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.deliveryDateField}>
                <div className={styles.deliveryDateInput}>
                  <div className={styles.deliveryDateIcon}>
                    <b className={styles.deliveryDateLabel}>4</b>
                  </div>
                  <b className={styles.describeTasks}>Describe Tasks</b>
                </div>
                <div className={styles.deliveryDateSelector}>
                  <p className={styles.theFreelancerJob}>
                    *The freelancer Job will be reviewed based on these tasks.
                    You can add as much as you want, keep it straight and clear.
                  </p>
                  <div className={styles.dateSelector}>
                    <p className={styles.describeTheTasks}>
                      Describe the tasks or milestones that makes part of the
                      job
                    </p>
                    <div className={styles.compAddtask}>
                      <div className={styles.textInputGroup}>
                        <div className={styles.textInput2}>
                          <b className={styles.addDashboardTo}>
                            Add dashboard to manage assets
                          </b>
                        </div>
                        <div className={styles.btnDelete}>
                          <img
                            className={styles.delete1Icon}
                            alt=""
                            src="/delete-1.svg"
                          />
                          <b className={styles.delete}>Delete</b>
                        </div>
                      </div>
                      <div className={styles.taskInputContainer}>
                        <input
                          className={styles.textInput3}
                          placeholder="e.g. Historical for the Hamster Coins swaps"
                          type="text"
                          value={taskInput}
                          onChange={(e) => setTaskInput(e.target.value)}
                        />
                        <button
                          className={styles.btnAdd}
                          type="button"
                          onClick={addTask}
                        >
                          <img
                            className={styles.taskSquare1Icon}
                            alt=""
                            src="/tasksquare-12.svg"
                          />
                          <b className={styles.addTask}>Add Task</b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.taskExample}>
                    <b className={styles.exampleTasks}>Example tasks:</b>
                    <p className={styles.theDashboardShouldContainer}>
                      <ul className={styles.theDashboardShouldIncludeA}>
                        <li className={styles.theDashboardShould}>
                          The dashboard should include a graphic on the PnL’s.
                        </li>
                        <li className={styles.itShouldBe}>
                          It should be yellow and black.
                        </li>
                        <li>It must include animations of Hamsters.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.budgetField}>
                <div className={styles.budgetInput}>
                  <div className={styles.budgetIcon}>
                    <b className={styles.budgetLabel}>5</b>
                  </div>
                  <b className={styles.specifyDeliveryDate}>
                    Specify Delivery Date
                  </b>
                </div>
                <div className={styles.budgetDescriptionParent}>
                  <div className={styles.budgetDescription}>
                    <b className={styles.specifyTheDates}>
                      Specify the dates the freelancer must deliver the job.
                    </b>
                    <div className={styles.escrowExplanation}>
                      <b className={styles.toKeepIn}>To keep in mind:</b>
                      <p className={styles.deliveryLimitTimeContainer}>
                        <ul className={styles.deliveryLimitTimeIs2359T}>
                          <li>
                            Delivery limit time is 23:59 the chosen date. The
                            time is based on your location.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  <div>
                    <Calendar onChange={setDeliveryDate} value={deliveryDate} />
                    {/* <div className={styles.monthSelector}>
                      <div className={styles.monthNavigation}>
                        <img
                          className={styles.chevronLeftIcon}
                          loading="lazy"
                          alt=""
                          src="/chevron-left.svg"
                        />
                      </div>
                      <b className={styles.february}>February</b>
                      <div className={styles.monthNavigation1}>
                        <img
                          className={styles.chevronRightIcon}
                          loading="lazy"
                          alt=""
                          src="/chevron-right.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.calendar1}>
                      <div className={styles.daysOfWeek}>
                        <b className={styles.s}>S</b>
                      </div>
                      <div className={styles.daysOfWeek1}>
                        <div className={styles.m}>M</div>
                      </div>
                      <div className={styles.daysOfWeek2}>
                        <div className={styles.t}>T</div>
                      </div>
                      <div className={styles.daysOfWeek3}>
                        <div className={styles.w}>W</div>
                      </div>
                      <div className={styles.daysOfWeek4}>
                        <div className={styles.t1}>T</div>
                      </div>
                      <div className={styles.daysOfWeek5}>
                        <div className={styles.f}>F</div>
                      </div>
                      <div className={styles.daysOfWeek6}>
                        <div className={styles.s1}>S</div>
                      </div>
                      <div className={styles.daysOfWeek7}>
                        <div className={styles.div}>1</div>
                      </div>
                      <div className={styles.daysOfWeek8}>
                        <div className={styles.div1}>1</div>
                      </div>
                      <div className={styles.daysOfWeek9}>
                        <div className={styles.div2}>1</div>
                      </div>
                      <div className={styles.daysOfWeek10}>
                        <div className={styles.div3}>1</div>
                      </div>
                      <div className={styles.daysOfWeek11}>
                        <div className={styles.div4}>2</div>
                      </div>
                      <div className={styles.daysOfWeek12}>
                        <div className={styles.div5}>3</div>
                      </div>
                      <div className={styles.daysOfWeek13}>
                        <div className={styles.div6}>4</div>
                      </div>
                      <div className={styles.daysOfWeek14}>
                        <div className={styles.div7}>5</div>
                      </div>
                      <div className={styles.daysOfWeek15}>
                        <div className={styles.div8}>6</div>
                      </div>
                      <div className={styles.daysOfWeek16}>
                        <div className={styles.div9}>7</div>
                      </div>
                      <div className={styles.daysOfWeek17}>
                        <div className={styles.div10}>8</div>
                      </div>
                      <div className={styles.daysOfWeek18}>
                        <div className={styles.div11}>9</div>
                      </div>
                      <div className={styles.daysOfWeek19}>
                        <div className={styles.div12}>10</div>
                      </div>
                      <div className={styles.daysOfWeek20}>
                        <div className={styles.div13}>11</div>
                      </div>
                      <div className={styles.daysOfWeek21}>
                        <div className={styles.div14}>12</div>
                      </div>
                      <div className={styles.daysOfWeek22}>
                        <div className={styles.div15}>13</div>
                      </div>
                      <div className={styles.daysOfWeek23}>
                        <div className={styles.div16}>14</div>
                      </div>
                      <div className={styles.daysOfWeek24}>
                        <div className={styles.div17}>15</div>
                      </div>
                      <div className={styles.daysOfWeek25}>
                        <div className={styles.div18}>16</div>
                      </div>
                      <div className={styles.daysOfWeek26}>
                        <div className={styles.div19}>17</div>
                      </div>
                      <div className={styles.daysOfWeek27}>
                        <div className={styles.div20}>18</div>
                      </div>
                      <div className={styles.daysOfWeek28}>
                        <div className={styles.div21}>19</div>
                      </div>
                      <div className={styles.daysOfWeek29}>
                        <div className={styles.div22}>20</div>
                      </div>
                      <div className={styles.daysOfWeek30}>
                        <div className={styles.div23}>21</div>
                      </div>
                      <div className={styles.daysOfWeek31}>
                        <div className={styles.div24}>22</div>
                      </div>
                      <div className={styles.daysOfWeek32}>
                        <div className={styles.div25}>23</div>
                      </div>
                      <div className={styles.daysOfWeek33}>
                        <div className={styles.div26}>24</div>
                      </div>
                      <div className={styles.daysOfWeek34}>
                        <div className={styles.div27}>25</div>
                      </div>
                      <div className={styles.daysOfWeek35}>
                        <div className={styles.div28}>26</div>
                      </div>
                      <div className={styles.daysOfWeek36}>
                        <div className={styles.div29}>27</div>
                      </div>
                      <div className={styles.daysOfWeek37}>
                        <div className={styles.div30}>28</div>
                      </div>
                      <div className={styles.daysOfWeek38}>
                        <div className={styles.div31}>29</div>
                      </div>
                      <div className={styles.daysOfWeek39}>
                        <div className={styles.div32}>30</div>
                      </div>
                      <div className={styles.daysOfWeek40}>
                        <div className={styles.div33}>31</div>
                      </div>
                      <div className={styles.daysOfWeek41}>
                        <div className={styles.div34}>1</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className={styles.budgetTitleParent}>
                <div className={styles.budgetTitle}>
                  <div className={styles.budgetIcon1}>
                    <b className={styles.piggyBank}>6</b>
                  </div>
                  <b className={styles.addTheProject}>Add the project Budget</b>
                </div>
                <div className={styles.budgetDescription1}>
                  <div className={styles.escrowInfo}>
                    <b className={styles.theProjectBudget}>
                      The project Budget will be put on escrow.
                    </b>
                    <b className={styles.toKeepIn1}>To keep in mind:</b>
                    <p className={styles.theEscrowedBudgetContainer}>
                      <ul className={styles.theEscrowedBudgetWillBeKe}>
                        <li className={styles.theEscrowedBudget}>
                          The escrowed budget will be kept securely on an smart
                          contract while the freelance deliver the job.
                        </li>
                        <li>
                          You will have a private chat with the freelance of
                          your choice, here you both will be able to check tasks
                          completed, and a AI will also give an score based on
                          your chats and tasks created.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className={styles.budgetInput1}>
                    <b className={styles.projectBudget}>Project Budget</b>
                    <div className={styles.tokenSelection}>
                      <b className={styles.chooseYourPreferred}>
                        Choose your preferred token:
                      </b>
                      <div className={styles.tokenOptions}>
                        <div className={styles.availableTokens}>
                          <img
                            className={styles.usdcSimplified1Icon}
                            loading="lazy"
                            alt=""
                            src="/usdc-simplified-1.svg"
                          />
                        </div>
                        <img
                          className={styles.dai1Icon}
                          loading="lazy"
                          alt=""
                          src="/dai-1.svg"
                        />
                        <img
                          className={styles.availableTokensIcon}
                          loading="lazy"
                          alt=""
                          src="/frame-1581.svg"
                        />
                        <img
                          className={styles.availableTokensIcon1}
                          loading="lazy"
                          alt=""
                          src="/frame-1582.svg"
                        />
                      </div>
                      <div className={styles.tokenDetails}>
                        <img
                          className={styles.emojiObjectsIcon}
                          loading="lazy"
                          alt=""
                          src="/emoji-objects.svg"
                        />
                        <div className={styles.token1}>
                          1 token = 1 US Dollar
                        </div>
                      </div>
                    </div>
                    <input
                      className={styles.textInput4}
                      placeholder="Type amount"
                      type="number"
                      name="budget"
                      value={projectBudget}
                      min="0"
                      onChange={(e) => setProjectBudget(Number(e.target.value))}
                    />
                    <button
                      className={styles.btnApprove}
                      onClick={approveUSDCandOpenProposal}
                      type="button"
                    >
                      <img
                        className={styles.thumbsUp1Icon}
                        alt=""
                        src="/thumbsup-1.svg"
                      />
                      <b className={styles.approveBudget}>Approve Budget</b>
                    </button>
                  </div>
                </div>
              </div>
              <ReviewJobOffer
                gigTitle={gigTitle}
                gigDescription={gigDescription}
                tasks={tasks}
                deliveryDate={deliveryDate}
                budget={projectBudget}
              />
            </div>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <img
          className={styles.gig2hire1Icon}
          loading="lazy"
          alt=""
          src="/gig2hire-11.svg"
        />
        <div className={styles.copyright}>
          <div className={styles.gig2hireAllRights}>
            © 2024 Gig2Hire. All Rights reserved.
          </div>
        </div>
        <div className={styles.socialMediaLinks}>
          <div className={styles.socialMedia}>
            <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
          </div>
        </div>
        <div className={styles.socialMedia1}>
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/vector-8.svg"
          />
        </div>
      </footer>
    </div>
  );
};

export default PostAJob;
