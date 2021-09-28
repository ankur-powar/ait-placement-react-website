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
        imgSrc="https://www.kindpng.com/picc/m/14-142278_high-school-student-grad-transparent-background-education-logo.png"
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
        docLink="https://www.aitpune.com/Notices/In%20Sem%20Exam%20for%20Sem%20I%202021%20-%2022%20Student.pdf"
        docName="BNY ShortList.pdf"
      />
    </div>
  );
}

export default Student;