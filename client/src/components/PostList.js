import React, {useState} from 'react';
import PostListItem from './PostListItem';


const posts = [
  {
    id: 12,
    content: "week 11 of lighthouse labs. it feels so good",
    user_id: 2,
    photo: "https://www.bounty.com/~/media/a4363499e75e4f49a8bfc62e35bcf69a.ashx?la=en",
    first_name: "Maggie",
  },
  {
    id: 6,
    content: "The best coffee in the world",
    user_id: 1,
    photo: "https://cdn.shopify.com/s/files/1/0045/6264/9123/files/untitled5-min.png?v=1583017417",
    first_name: "Eliza",
  },
  {
    id: 4,
    content: "What would you like for dinner? I have plenty of ingredients",
    user_id: 2,
    photo: "https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg",
    first_name: "Maggie",
  },
  {
    id: 2,
    content: "Please save the trees!",
    user_id: 4,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mz6Ued0amZSvTTftHbHW227fRXWt03TcVA&usqp=CAU",
    first_name: "Andrea",
  },
  {
    id: 1,
    content: "What a day",
    user_id: 1,
    photo: "https://c.tadst.com/gfx/1200x675/sunrise.png?1",
    first_name: "Eliza",
  }
];

function PostList() {

  const postItem = posts.map((item, key) => {
    return <PostListItem
    key={key}
    content={item.content}
    first_name={item.first_name}
    photo={item.photo}
    />
  })
  return (
    <div className="PostList">
      <ul className="SidebarList">
        {postItem}
      </ul> 
    </div>
  )
}

export default PostList
