// import './App.css'
import Sidebar from "./Sidebar";


// function App() {
  

//   return (
//     <>
// <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-4">
//         <h1 className="text-2xl">Главная страница</h1>
//       </div>
//     </div>
    

//     </>
//   )
// }

// export default App






export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl">Главная страница</h1>
      </div>
    </div>
  );
}
