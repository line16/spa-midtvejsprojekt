import style from "./page.module.scss";
import NavFront from "../Navigation";

const page = () => {
  return (
    <>
      <div className={style.ContactBG}>
        <NavFront />
        <div className={style.ContactNames}>

          <div>
          <h1>Iben Hildelof</h1>
          <p>
          Contrary tot popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClinktock, a latin professor at Hampden-sydney College in Virgina,
          </p>
          </div>

          <div>
          <h1>Danny Marthen</h1>
          <p>
          Contrary tot popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClinktock, a latin professor at Hampden-sydney College in Virgina,
          </p>
          </div>

          <div>
          <h1>Owen Spectrac</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id
            maiores harum nostrum aut quisquam quod rerum laborum iure incidunt.
          </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default page;
