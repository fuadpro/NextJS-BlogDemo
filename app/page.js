import BlogCard from "@/components/BlogCard";

import styles from "./styles.module.css";

async function getPosts(){
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  return res.json();
}

export default async function Home() {

  const {posts} = await getPosts();

  return (
    <div className={styles.blogsConatiner}>
      {
        posts?.map((post) =>(
          <BlogCard key={post.id} {...post}/>
        ))
      }      
    </div>
  )
}
