import { useCharacter } from '../application/hooks/use-character.hook'

/**
 * Character container.
 */
const CharacterContainer = () => {
  const { characters, error, loading } = useCharacter()

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: {error?.reason}</div>}
      {!error && !loading && !characters?.length && <div>Sin datos</div>}
      {!error && !loading && !!characters?.length && characters.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  )
}

export default CharacterContainer
