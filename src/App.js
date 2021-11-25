function App() {
   
    let books = [
      {id: 1, autor: 'Лев Тол­стой	', name: 'Вой­на и мир	', year: '1869'},
      {id: 2, autor: 'Джордж Оруэлл		', name: '1984', year: '1949'},
      {id: 3, autor: 'Джеймс Джойс		', name: 'Улисс', year: '1922'},
      {id: 4, autor: 'Вла­ди­мир Набо­ков		', name: 'Лолита', year: '1955'},
      {id: 5, autor: 'Уильям Фолк­нер		', name: 'Шум и ярость	', year: '1929'},
   ];

   let res = books.map(function(item) {
      return <tr key={item.id}>
         <td>{item.autor}</td>
         <td>{item.name}</td>
         <td>{item.year}</td>
      </tr>;
   });
   
   return  <table>
      <thead>
         <tr>
            <td>Автор</td>
            <td>Название книги</td>
            <td>Год выпуска</td>
         </tr>
      </thead>
      <tbody>
         {res}
      </tbody>
   </table>;
  }




export default App;