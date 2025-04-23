import Spline from "@splinetool/react-spline";

export default function Model1() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Spline 
        scene="https://prod.spline.design/9JUkKNg508m2WWaF/scene.splinecode" 
        className="spline-model"
      />
      <style>
        {`
          .spline-model canvas {
            outline: none !important;
          }
        `}
      </style>
    </div>
  );
}
