import React from "react";

const Page = (props) => {
    const { title } = props;
    return <div>This is the {title} page</div>
}

export default Page;

export async function getStaticProps() {
    return {
        props: {
            title: "blog"
        }
    };
}
