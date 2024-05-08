import { Canvg } from "canvg";

export const svgToDataUri = async (svgString: string) => {
  try {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      const v = Canvg.fromString(context, svgString.trim());
      await v.render();
      const dataUri = canvas.toDataURL("image/png");
      return dataUri;
    }
  } catch (error) {
    console.error("Error occured:", error);
    return "";
  }
};
