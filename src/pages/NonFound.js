import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Sorry! Please go <Link to="/">Home</Link> page
    </div>
  );
}