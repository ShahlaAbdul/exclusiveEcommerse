import React from "react";
import { Carousel } from "react-carousel-minimal";


function HomePageSlide() {
  const data = [
    {
      image:"https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1704067200&Signature=j-S6TmJG~QkvJSJ7RWz-3~mXCzhGhzBj2MVYPab8NmZLlbZjFaTWVd4urH0Wb4l4tljEjxwz0PmrcoxjtFVk~5rhFvlgSe4HaLEBbRkbZ-WT96Rwcgd~dGj11WGpg28OBHmosCF0OqQ~3MSEcatEnvqY~J4INP7foz132pHVyBBVrXBxSgahZHS5Zr4XbJvALazkdXy8~Fh07KbCNrS9ERtsgChW8GVU99GC1dJfEG17Bc5za-0NDSm2gheUIRxph7TF5tvIb7bdYsdAxZCUDJOfXjoBU19MXNQ9WycEoqV3meIHD1-MruN6IIDR9ZA0RPtN5F3iQ3FIN7KX1Tcxhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1704067200&Signature=j-S6TmJG~QkvJSJ7RWz-3~mXCzhGhzBj2MVYPab8NmZLlbZjFaTWVd4urH0Wb4l4tljEjxwz0PmrcoxjtFVk~5rhFvlgSe4HaLEBbRkbZ-WT96Rwcgd~dGj11WGpg28OBHmosCF0OqQ~3MSEcatEnvqY~J4INP7foz132pHVyBBVrXBxSgahZHS5Zr4XbJvALazkdXy8~Fh07KbCNrS9ERtsgChW8GVU99GC1dJfEG17Bc5za-0NDSm2gheUIRxph7TF5tvIb7bdYsdAxZCUDJOfXjoBU19MXNQ9WycEoqV3meIHD1-MruN6IIDR9ZA0RPtN5F3iQ3FIN7KX1Tcxhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1704067200&Signature=j-S6TmJG~QkvJSJ7RWz-3~mXCzhGhzBj2MVYPab8NmZLlbZjFaTWVd4urH0Wb4l4tljEjxwz0PmrcoxjtFVk~5rhFvlgSe4HaLEBbRkbZ-WT96Rwcgd~dGj11WGpg28OBHmosCF0OqQ~3MSEcatEnvqY~J4INP7foz132pHVyBBVrXBxSgahZHS5Zr4XbJvALazkdXy8~Fh07KbCNrS9ERtsgChW8GVU99GC1dJfEG17Bc5za-0NDSm2gheUIRxph7TF5tvIb7bdYsdAxZCUDJOfXjoBU19MXNQ9WycEoqV3meIHD1-MruN6IIDR9ZA0RPtN5F3iQ3FIN7KX1Tcxhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];


  return (
    <div className="Slide">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height='300px'

            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              maxHeight: "500px",
              
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default HomePageSlide;
