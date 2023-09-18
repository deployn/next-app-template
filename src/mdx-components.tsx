import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text2xl font-bold">{children}</h3>,
    p: ({ children }) => <p className="text-lg">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-4">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    code: ({ children }) => (
      <code className="rounded bg-gray-200 px-2 py-1">{children}</code>
    ),
    ...components,
  }
}
