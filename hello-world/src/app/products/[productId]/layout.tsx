// import React from 'react'

// type Props = {}

export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <h2>Featured products</h2>
        </>
    )
}