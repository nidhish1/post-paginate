import React from 'react'

export const Pagination = ( {postsPerPage, totalPost, paginate}) => {
    const pageNumbers = []
    for (let i =1;i <= Math.ceil (totalPost/postsPerPage);i++) {
        pageNumbers.push(i)
    }
    
    return (
        <nav>
            <ul className = "pagination">
                {pageNumbers.map (numbers => (
                    <l1 key = {numbers} className = "page-temp"> 
                    <a  onClick = { ()=>paginate(numbers) } href = "!#" className="page-link"> {numbers}</a>
                    </l1>
                ))}
                
            </ul>
            
        </nav>
    )
}

export default Pagination
