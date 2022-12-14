import { useEffect, useState } from "react";

import { postsService } from "../../services";
import { Post } from "../post/Post";

export const Posts = () => {
    const [posts, setPosts] = useState( null);

    useEffect(() => {
        postsService.getAllPosts().then(value => value.slice(0, 10)).then(value => setPosts(value))
    }, []);

//     postsService.getAllPosts().then(value => {
//         value.length = 10
//
//         return value
//
//     }).then(value => setPosts(value))
// }, []);

    return (
        <div>
            {
                posts && posts.map((item) => <Post key={item.id} data={item}/>)
            }
        </div>
    );
};
