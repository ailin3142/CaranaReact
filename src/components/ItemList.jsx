import Item from "./Item"

export default function ({items}) {
    return<ul>
            {items.map(item => <li><Item item={item}/></li> )}
        </ul>
}