import { useState } from 'react'
import { useEffect } from 'react'
export default function Test() {

    const DATA = [
        {
            id: 1,
            title: 'Enjoy studying English',
            tags: [
                {
                    id: 'tag1',
                    title: 'English',
                    slug: 'english',
                },
                {
                    id: 'tag2',
                    title: 'For kids',
                    slug: 'kids',
                },
            ],
        },
        {
            id: 2,
            title: 'Parlons français',
            tags: [
                {
                    id: 'tag3',
                    title: 'French',
                    slug: 'french',
                },
                { id: 'tag2', title: 'Kids', slug: 'kids' },
            ],
        },
        {
            id: 3,
            title: 'Intermediate English',
            tags: [
                {
                    id: 'tag1',
                    title: 'English',
                    slug: 'english',
                },
                {
                    id: 'tag4',
                    title: 'Adults',
                    slug: 'adults',
                },
            ],
        },
        {
            id: 4,
            title: 'How to study French',
            tags: [
                {
                    id: 'tag3',
                    title: 'French',
                    slug: 'french',
                },
                {
                    id: 'tag4',
                    title: 'Adults',
                    slug: 'adults',
                },
            ],
        },
    ]
    // let test = DATA.map((item) => item.title)
    // console.log(test)
    // console.log("Above Code is test")
    const [filterTags, setFilterTags] = useState([])
    // let filteredDATA = DATA.filter((node) =>
    //     filterTags.length > 0
    //         ? filterTags.every((filterTag) =>
    //             node.tags.map((tag) => tag.slug).includes(filterTag)
    //         )
    //         : DATA
    // )
    const filterHandler = (event) => {
        if (event.target.checked) {
            setFilterTags([...filterTags, event.target.value])
        } else {
            setFilterTags(
                filterTags.filter((filterTag) => filterTag !== event.target.value)
            )
        }
    }
    const shouldFilterByTags = filterTags.length > 0;
    // Function to check if a node has all the filterTags
    const nodeHasAllTags = (node) => {
        // Extract the slug of each tag in the node
        const nodeTagSlugs = node.tags.map((tag) => tag.slug);
        // Check if every filterTag is included in the nodeTagSlugs
        return filterTags.every((filterTag) => nodeTagSlugs.includes(filterTag));
    };
    // Filter the DATA array based on the tags
    let filteredDATA = shouldFilterByTags
        ? DATA.filter(nodeHasAllTags)  // Filter if there are tags to filter by
        : DATA;
    return (
        <>
            <div>
                <label htmlFor="english">
                    <input
                        type="checkbox"
                        onChange={filterHandler}
                        value="english"
                        id="english"
                    />
                    <span>English</span>
                </label>
                <label htmlFor="french">
                    <input
                        type="checkbox"
                        onChange={filterHandler}
                        value="french"
                        id="french"
                    />
                    <span>French</span>
                </label>
                <label htmlFor="kids">
                    <input
                        type="checkbox"
                        onChange={filterHandler}
                        value="kids"
                        id="kids"
                    />
                    <span>Kids</span>
                </label>
                <label htmlFor="adults">
                    <input
                        type="checkbox"
                        onChange={filterHandler}
                        value="adults"
                        id="adults"
                    />
                    <span>Adults</span>
                </label>
            </div>
            <ul>
                {filteredDATA.map((node) => (
                    <li key={node.id}>{node.title}</li>
                ))}
            </ul>
        </>
    )
}