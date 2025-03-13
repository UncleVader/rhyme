"use client"

export const addToMailingList = async (email_address: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/mailing-list-subscribe`,{
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      email_address
    })
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
    })
}
