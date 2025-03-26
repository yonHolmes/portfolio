import {notFound} from "next/navigation"

export default function NotFoundCatchAll() {
  console.log('Not Found');
  notFound()
}