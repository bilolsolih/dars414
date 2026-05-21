// async await
// hooklarni ishlatish mumkinmas
// server component ichida client componentlarni ishlatish mumkin

// async await qilish mumkinmas
// hooklarni ishlatish mumkin
// client component ichida server componentlarni ishlatish mumkinmas
// lekin client component ichiga server componentni children sifatida berib yuborish mumkin


export default async function NewsDetailPage({params}) {
    const {id} = await params;
    return <main>
        <h1>News Detail Page {id}</h1>
    </main>
}