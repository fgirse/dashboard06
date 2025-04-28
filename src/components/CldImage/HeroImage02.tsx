import Image from "next/image";
import {Cloudinary} from "@cloudinary/url-gen";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

// Import required actions.

import {byAngle} from "@cloudinary/url-gen/actions/rotate"



  // Import the required actions and qualifiers.
  import {fill} from "@cloudinary/url-gen/actions/resize";
  import {source} from "@cloudinary/url-gen/actions/overlay";
  import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

  // Import required values.
  import {text} from "@cloudinary/url-gen/qualifiers/source";
  import {Position} from "@cloudinary/url-gen/qualifiers/position";
  import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
  import {autoGravity, compass} from "@cloudinary/url-gen/qualifiers/gravity";
  import Container from "@/components/Container";
  import Center from "@/components/Center";
  import { useTranslations } from "next-intl";
// Create and configure your Cloudinary instance.

export default function HeroImage02() {

    const t = useTranslations  ("IntroWebside")

    const cld = new Cloudinary({

  cloud: {
    cloudName: 'Carlo2024'
  }
}); 

// Use the image with public ID, 'sample'.
const myImage = cld.image('/space_mt4o5t_space-sagen_qwsfzj');


// Transform the image.
myImage
  .resize(fill(1500, 1200))
  .roundCorners(byRadius(0))
  
  .overlay(   
    source(
      text(t("zitat01"), new TextStyle('bowlby one sc',50))
      .textColor('black')      
    )
    
    .position(new Position().gravity(compass('north')).offsetY(90).offsetX(0)))
    .overlay(   
      source(
        text(t("zitat02"), new TextStyle('bowlby one sc',50))
        .textColor('black')      
      )
      
      .position(new Position().gravity(compass('north')).offsetY(150).offsetX(0)))

      .overlay(   
        source(
          text(t("zitat03"), new TextStyle('bowlby one sc',50))
          .textColor('black')      
        )
        
        .position(new Position().gravity(compass('north')).offsetY(210).offsetX(0)))
      
            .overlay(   
                source(
                  text(t("zitat04"), new TextStyle('bowlby one sc',50))
                  .textColor('black')      
                )
                
                .position(new Position().gravity(compass('north')).offsetY(260).offsetX(0)))

      
    
  .rotate(byAngle(0))
  .format('png');
  

  // Return the delivery URL
  const myUrl = myImage.toURL()
  return(
    
    
    <div className="flex flex-col items-center">
    
      <Image src={myUrl} width={1280} height={700} alt="Transformed Image" className="" />
    </div>
    
    
  );
}