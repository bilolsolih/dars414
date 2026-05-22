import CoursesBodyComponent from "./components/courses-body.component";
import axios from "axios";

export default async function CoursesPage({searchParams}) {
    const {page, size} = await searchParams;
    const query = new URLSearchParams();
    query.set('page', page ?? 1);
    query.set('size', size ?? 10);
    const response = await axios.get('http://localhost:8888/public/players/get-all-players' + '?' + query.toString());

    return <main>
        <h1>Courses Page</h1>
        <CoursesBodyComponent initialData={response.data} initialPage={page} initialSize={size}/>
    </main>
}