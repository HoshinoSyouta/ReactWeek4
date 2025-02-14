function Pagination({ pageInfo, handlePageChange }) {
  const handleClick = (event, page) => {
    event.preventDefault();
    handlePageChange(page);
  };

  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${!pageInfo.has_pre && 'disabled'}`}>
            <a
              onClick={(event) => handleClick(event, pageInfo.current_page - 1)}
              className="page-link"
              href="#"
            >
              上一頁
            </a>
          </li>

          {Array.from({ length: pageInfo.total_pages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                pageInfo.current_page === index + 1 && 'active'
              }`}
            >
              <a
                onClick={() => handleClick(event, index + 1)}
                className="page-link"
                href="#"
                prevent
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li className={`page-item ${!pageInfo.has_next && 'disabled'}`}>
            <a
              onClick={() => handleClick(event, pageInfo.current_page + 1)}
              className="page-link"
              href="#"
            >
              下一頁
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;
