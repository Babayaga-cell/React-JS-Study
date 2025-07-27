import PropTypes from "prop-types";

function ListProps({ category = "Category", items = [] }) {
  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-item">{listItems}</ol>
    </>
  );
}

ListProps.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};

export default ListProps;
