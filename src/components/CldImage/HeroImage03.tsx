import Image from "next/image";
import {Cloudinary} from "@cloudinary/url-gen";

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

    const t = useTranslations  ("Hero_Skizze")

    const cld = new Cloudinary({

  cloud: {
    cloudName: 'Carlo2024'
  }
}); 

// Use the image with public ID, 'sample'.
const myImage = cld.image('/skizze_cvbvbm');


// Transform the image.
myImage
  .resize(fill(800, 400))
  .roundCorners(byRadius(0))
  
  .overlay(   
    source(
      text(t("text01"), new TextStyle('bowlby one sc',50))
      .textColor('black')      
    )
    
    .position(new Position().gravity(compass('north')).offsetY(-75).offsetX(0)))

    .overlay(   
        source(
          text(t("text02"), new TextStyle('bowlby one sc',50))
          .textColor('black')      
        )
        
        .position(new Position().gravity(compass('north')).offsetY(-75).offsetX(0)))
 

     
      
    
  .rotate(byAngle(0))
  .format('png');
  

  // Return the delivery URL
  const myUrl = myImage.toURL()
  return(
    
    
    <div className="flex flex-col items-center">
    
      <Image src={myUrl} width={1280} height={500} alt="Transformed Image" className="" />
    </div>
    
    
  );
}