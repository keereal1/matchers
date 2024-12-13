export default function sorter(character) {
    return character.sort((a,b) => b.health - a.health)
}

