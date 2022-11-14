function FilmsTableContent(props) {
  return (
    <tbody>
      {props.films.map((film) => (
        <tr key={film.id}>
          <td>{film.id}</td>
          <td>{film.title}</td>
          <td>{film.rating}</td>
          <td>{film.categories[0].name}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default FilmsTableContent;
