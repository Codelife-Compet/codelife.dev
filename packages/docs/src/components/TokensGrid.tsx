import React from 'react'
import '../styles/tokens-grid.css'
interface TokensGridProps {
  tokens: Record<string, string | number>
  hasRemValue?: boolean
}
export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {value
                  .toString()
                  .replace(/rem$/, ' rem')
                  .replace(/px$/, ' px')
                  .replace(/%$/, ' %')}
              </td>
              {hasRemValue && (
                <td>
                  {Number((value.toString().replace('rem', '') as any) * 16) +
                    ' px'}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
