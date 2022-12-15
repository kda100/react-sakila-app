function CustomersTableContent({ items: customers }) {
  return (
    <tbody>
      {customers.map((customer) => (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>{customer.firstName}</td>
          <td>{customer.lastName}</td>
          <td>{customer.email}</td>
          <td>{customer.address.city.name}</td>
          <td>{customer.address.city.country.name}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default CustomersTableContent;
