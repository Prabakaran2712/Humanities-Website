import { useEffect } from "react";
import { getdetails } from "../../data/faculty";
import { useState } from "react";
import Title from "../../components/Title";
import SideBar from "../../components/sideBsar/Sidebar";
import Cards from "../../components/card/Cards";
export default function Teaching() {
  useEffect(() => {
    document.title = "teaching staff";
  }, []);
  var data = getdetails();
  const [curSub, setcurSub] = useState(data[0]);
  const changecurSub = (awardId) => {
    setcurSub(data.find((data) => data.id === awardId));
  };
  return (
    <div className="mb-5">
      <Title text="Teaching Staff" />
      <div className="row">
        <SideBar views={data} curView={curSub} changeCurView={changecurSub} />
        <div className="col-sm-12 col-md-9">
          <Cards staffs={curSub.staff} />
        </div>
      </div>
    </div>
  );
}
