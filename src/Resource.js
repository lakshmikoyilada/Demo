import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Resource() {
  return <>
    <div>
      <button><Link to="cheat">Cheat Codes</Link></button>
      <button><Link to="roadmaps">Roadmaps</Link></button>
    </div>
    <h1>This is resources section</h1>
    <Outlet />
  </>
}

export function CheatCodes() {
  return <>
    <h1>This is Cheat Codes section</h1>
  </>
}

export function Roadmaps() {
  return <>
    <h1>This is Roadmaps section</h1>
  </>
}
export default Resource



