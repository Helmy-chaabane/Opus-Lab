import { FC, Dispatch, SetStateAction } from "react";
import styles from "./accordion.module.scss";

interface AccordionItemProps {
  index: number;
  current: number | null;
  content: string;
  header: string;
  setCurrent: Dispatch<SetStateAction<number | null>>;
}

const AccordionItem: FC<AccordionItemProps> = ({
  index,
  current,
  setCurrent,
  content,
  header,
}) => {
  return (
    <>
      <button
        onClick={() => setCurrent(index === current ? null : index)}
        className={[
          styles.accordion__btn,
          index === current && styles.accordion__btn__active,
        ].join(" ")}
      >
        {header}
      </button>
      <div
        className={[
          styles.accordion__content__container,
          index === current && styles.accordion__content__container__active,
        ].join(" ")}
        /* style={{
          height: index === current ? "auto" : "0px",
          transition: "height 1s",
        }}*/
      >
        <p className={styles.accordion__content}>{content}</p>
      </div>
    </>
  );
};

export default AccordionItem;
