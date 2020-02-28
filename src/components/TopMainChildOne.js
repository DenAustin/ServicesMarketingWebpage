import React from "react";

const deliverables = [
  {
    icon: "fa-mobile-alt",
    titleA: "SUPERBLY",
    titleB: "RESPONSSIVE",
    description:
      "Resource Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin massa at ipsum dictum dignissim. Nulla facilisi. Donec blandit vitae erat nec finibus. Aliquam nec varius justo."
  },
  {
    icon: "fa-desktop",
    titleA: "CLEAN",
    titleB: "SQUEEKY",
    description:
      "Pellentesque laoreet nisl vitae augue dignissim scelerisque. Morbi porta enim sed sem scelerisque, hendrerit aliquet ante condimentum. Pellentesque in massa sed libero maximus aliquet ."
  },
  {
    icon: "fa-laptop-code",
    titleA: "MULTI",
    titleB: "PURPOSE",
    description:
      "Integer elementum pellentesque ante et venenatis. Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue."
  },
  {
    icon: "fa-recycle",
    titleA: "HIGHLY",
    titleB: "FLEXIBLE",
    description:
      "Nunc sagittis viverra sem vel fringilla. Sed venenatis suscipit nulla ut vestibulum. Morbi volutpat risus id condimentum iaculis. Mauris tempor eget erat nec lobortis."
  }
];

const Service = ({ itemA, itemB }) => (
  <div>
    <h2>{itemA}</h2>
    <h2>{itemB}</h2>
  </div>
);

const serviceList = deliverables.map((item, index) => (
  <Service key={index} itemA={item.titleA} itemB={item.titleB} />
));

export default serviceList;
