import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Menubar from '../components/menubar/Menubar';
import NoticeTab from '../components/noticeTab/NoticeTab';
import Viewpost from '../components/viewpost/Viewpost';
import AddPost from '../components/addpost/Addpost';


function Admin() {
  return (
    <div> 
      <Navbar/>
      <AddPost
        date="27 Sep" time="12:30 am"
        title="BNY Interview ShortList" tags={["BNY","Job","Dream Company"]}
        text="BNY is comming On-Campus on 2 Oct 2021."
        docLink="https://www.aitpune.com/Notices/In%20Sem%20Exam%20for%20Sem%20I%202021%20-%2022%20Student.pdf"
        docName="BNY ShortList.pdf"
      />
      <Menubar/>
      <NoticeTab
        date="27 Sep" time="12:30 am"
        title="BNY Interview ShortList" tags={["BNY","Job","Dream Company"]}
      />
      <Viewpost
        date="27 Sep" time="12:30 am"
        title="BNY Interview ShortList" tags={["BNY","Job","Dream Company"]}
        text="BNY is comming On-Campus on 2 Oct 2021."
        docLink="https://www.aitpune.com/Notices/In%20Sem%20Exam%20for%20Sem%20I%202021%20-%2022%20Student.pdf"
        docName="BNY ShortList.pdf"
      />
    </div>
  );
}

export default Admin;