import Image from "next/image";
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.

import {byAngle} from "@cloudinary/url-gen/actions/rotate"
import {sepia} from "@cloudinary/url-gen/actions/effect";


  // Import the required actions and qualifiers.
  import {fill} from "@cloudinary/url-gen/actions/resize";
  import {source} from "@cloudinary/url-gen/actions/overlay";
  import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

  // Import required values.
  import {text} from "@cloudinary/url-gen/qualifiers/source";
  import {Position} from "@cloudinary/url-gen/qualifiers/position";
  import { useTranslations } from "next-intl";
  import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
  import {autoGravity, compass} from "@cloudinary/url-gen/qualifiers/gravity";
  import Container from "../Container";
  import Center from "../Center";
import { TextAlignment } from "@cloudinary/url-gen/qualifiers";
// Create and configure your Cloudinary instance.

export default function HeroImage() {
const cld = new Cloudinary({
  cloud: {
    cloudName: 'Carlo2024'
  }
}); 

const t = useTranslations('Hero');

// Use the image with public ID, 'sample'.
const myImage = cld.image('/interiore27_rri2qv');


// Transform the image.
myImage
  .resize(fill(1500, 900))
  .roundCorners(byRadius(0))

  .overlay(   
    source(
      text(t("präTitle"), new TextStyle('bowlby one sc',140))
      .textColor('white')       
    )
    
    .position(new Position().gravity(compass('north_west')).offsetY(200).offsetX(36)))

  
  .overlay(   
    source(
      text(t("Title"), new TextStyle('bowlby one sc',48))
      .textColor('white')       
    )
    
    .position(new Position().gravity(compass('north_west')).offsetY(320).offsetX(36)))

    .overlay(   
      source(
        text(t("postTitle"), new TextStyle('raleway', 24) .textAlignment('justify') .fontWeight('black')) // Apply 'bold' using .fontWeight()
          .textColor('white')      
      )
      .position(new Position().gravity(compass('north_west')).offsetY(390).offsetX(36)))
  

    
  .rotate(byAngle(0))
  .format('png');
  

  // Return the delivery URL
  const myUrl = myImage.toURL()
  return(
    
    
    <div className="flex flex-col items-center">
    
      <Image src={myUrl} width={1580} height={900} alt="Transformed Image" className="text-white text-left" />
    </div>
    
    
  );
}