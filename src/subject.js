// useEffect(() => {
//     const fetchSubjectList = async () => {
//       try {
//         const response = await fetch(
//           'http://angulartest.ducem.in/api/Candidate/GetSubjectList'
//         );
//         const data = await response.json();
//         setSubjectList(data);
//       } catch (error) {
//         console.error('Error fetching subject list:', error);
//       }
//     };
// fetchSubjectList();
//   }, []);

// {subjectList.map((subject) => (
//     <option key={subject.subjectId} value={subject.subjectId}>
//       {subject.subjectName}
//     </option>
//   ))}