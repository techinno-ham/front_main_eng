//import "./styles.css";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const RiveChatbot = () => {
  const { RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "/rive/chatbot.riv",
    // Be sure to specify the correct state machine (or animation) name
    // stateMachines: "Motion",
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.Cover, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
    //All Animations
    //stateMachines: "Chatbot State Machine",
    stateMachines: "Idle",
  });

  return <RiveComponent />;
};

// export const UrlDemo = () => {
//     const { rive, RiveComponent } = useRive({
//       src: "https://cdn.rive.app/animations/vehicles.riv",
//       autoplay: true,
//     });
//     return <RiveComponent />;
//   };

export default RiveChatbot;
