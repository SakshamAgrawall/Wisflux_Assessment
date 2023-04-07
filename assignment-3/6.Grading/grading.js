function exam_status(totalMarks,is_exam)
  {
  if (is_exam="Final-exam") {
    if(totalMarks>=90){
      return true;
    }
    return false;
  }
  else{
    if(totalMarks >= 89 && totalMarks <= 100){ 
      return true;
    }
    return false;
  }

 }
console.log(exam_status(95,"Final-exam"));
console.log(exam_status(65," "));
