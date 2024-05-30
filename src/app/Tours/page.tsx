import style from "./page.module.scss";
import NavFront from "../Navigation";
import Image from "next/image";
import square from "../../../public/images/square.png";
import circle from "../../../public/images/round-lamp.png";
import triangle from "../../../public/images/triangle.png";

const page = () => {
  return (
    <>
      <div className={style.ToursBG}>
        <NavFront />

        <div className={style.lightFlex}>
          <div>
            <h3>square</h3>
            <Image className={style.zoom_in_out_box} src={square} 
            alt="squareLight" 
            width={200} height={200} />
          </div>

          <div>
            <h3>triangle</h3>
            <Image
            className={style.zoom_in_out_box}
              src={triangle}
              alt="triangleLight"
              width={200}
              height={160}
            />
          </div>

          <div>
            <h3>circle</h3>

            <Image
            className={style.zoom_in_out_box} 
            src={circle} 
            alt="circleLight"
             width={200} height={200} />
          </div>
        </div>

        <div className={style.pTag}>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClinktock, a latin professor at Hampden-sydney College in Virgina,
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
