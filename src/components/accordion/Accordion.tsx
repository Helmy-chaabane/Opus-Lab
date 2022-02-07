import { FC, useState } from "react";
import AccordionItem from "./AccodionItem";
import styles from "./accordion.module.scss";

interface AccordionProps {}

const items = [
  {
    content:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
    header: "Item 1",
  },
  {
    content:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
    header: "Item 2",
  },
  {
    content:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
    header: "Item 3",
  },
  {
    content:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
    header: "Item 4",
  },
];

const Accordion: FC<AccordionProps> = () => {
  const [current, setCurrent] = useState<number | null>(null);
  return (
    <div className={styles.accordion__container}>
      {items.map((item, index) => (
        <AccordionItem
          index={index}
          current={current}
          {...item}
          setCurrent={setCurrent}
        />
      ))}
    </div>
  );
};

export default Accordion;
