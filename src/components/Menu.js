import { useState, useEffect } from "react";

export function Menu(props) {
  const notifyActLiveChange = (state) => {
    props.onChange(state);
  };

  //paryskinti nuoroda, ant kurios paspaudi:
  useEffect(() => {
    if (props.active === "List") {
      document.getElementById("link-list").style.fontWeight = "bold";
      document.getElementById("link-create").style.fontWeight = "400";
    } else if (props.active === "Create") {
      document.getElementById("link-list").style.fontWeight = "400";
      document.getElementById("link-create").style.fontWeight = "bold";
    } else {
      document.getElementById("link-list").style.fontWeight = "400";
      document.getElementById("link-create").style.fontWeight = "400";
    }
  });
// }, []) jei gale nurodai taip, tai priklauso nuo [] esanciu reiksmiu

  return (
    <div>
      <a id="link-list" href="#" onClick={(e) => notifyActLiveChange("List")}>
        Animal list
      </a>
      &nbsp;|&nbsp;
      <a
        id="link-create"
        href="#"
        onClick={(e) => notifyActLiveChange("Create")}
      >
        Create new animal
      </a>
    </div>
  );
}
