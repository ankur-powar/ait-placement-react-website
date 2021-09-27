import React from 'react';
import Navbar from '../components/navbar/Navbar';
import StudentDashboard from '../components/student_dashboard/StudentDashboard';
import Menubar from '../components/menubar/Menubar';
import NoticeTab from '../components/noticeTab/NoticeTab';
import Notice from '../components/notice/Notice';


function Student() {
  return (
    <div> 
      <Navbar/>
      <StudentDashboard
        imgSrc="https://picsum.photos/seed/picsum/110/110"
        rollNo="3309" name="Ankur Powar"
        regdNo="20817" emailId="ankurpowar@aitpune.edu.in"
        year="Third Year" branch="Computer Science"
      />
      <Menubar/>
      <NoticeTab
        date="27 Sep" time="12:30 am"
        title="BNY Interview ShortList" tags={["BNY","Job","Dream Company"]}
      />
      <Notice
        date="27 Sep" time="12:30 am"
        title="BNY Interview ShortList" tags={["BNY","Job","Dream Company"]}
        text="BNY is comming On-Campus on 2 Oct 2021."
        docLink="https://www.aitpune.com/Notices/fee%20in%20installment%202021-22.pdf"
        docName="BNY ShortList.pdf"
      />
    </div>
  );
}

export default Student;