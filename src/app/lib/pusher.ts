import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret: process.env.NEXT_PUBLIC_PUSHER_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true,
});

/**
 * Establish connection to pusher channels
 * @returns a pusher object which can then be used to subscribe to channels
 * Refer https://github.com/pusher/pusher-js
 */
export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_KEY,
  {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  }
);

pusherClient.connection.bind("error", function (err) {
  if (err.data.code === 4004) {
    console.log("Pusher Account Over limit!");
  }
});

// import  Pusher from "pusher-js";
// import Pusher from "pusher";

// export const pusherCient = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
//     cluster: NEXT_PUBLIC_PUSHER_CLUSTER,
//   });

// export const pusherServer = new Pusher({
//     appId: "APP_ID",
//     key: "APP_KEY",
//     secret: "APP_SECRET",
//     cluster: "APP_CLUSTER",
//   });
