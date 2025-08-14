function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <div className="container navbar">
          {/* Logo */}
          <h2 className="log">MindLink</h2>

          {/* Search Bar */}
          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input type="search" placeholder="Search for doctors, cases, and explore yourself" />
          </div>

          {/* Create Button + Profile Icon */}
          <div className="create-profile">
            <label className="btn btn-primary" htmlFor="create-post">
              <i className="uil uil-plus-circle"></i> Create
            </label>

            <div className="profile-photo">
              <label htmlFor="profile-upload">
                <i className="uil uil-user"></i>
              </label>
              <input type="file" id="profile-upload" hidden />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div className="container">
          {/* Left Sidebar */}
          <div className="left">
            {/* Profile */}
            <a href="#" className="profile">
              <div className="profile-photo">
                <img src="/logo192.png" alt="Profile" />
              </div>
              <div className="handle">
                <h4>Joy is dead</h4>
                <p className="text-muted">@joyzy</p>
              </div>
            </a>

            {/* Sidebar Menu */}
            <div className="sidebar">
              <a className="menu-item active">
                <span><i className="uil uil-home"></i></span>
                <h3>Home</h3>
              </a>
              <a className="menu-item">
                <span><i className="uil uil-compass"></i></span>
                <h3>Explore</h3>
              </a>
              <a className="menu-item" id="notifications">
                <span>
                  <i className="uil uil-bell">
                    <small className="notifications-count">+9</small>
                  </i>
                </span>
                <h3>Notifications</h3>

                {/* Notifications Popup */}
                <div className="notifications-popup">
                  <div>
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="Profile" />
                    </div>
                    <div className="notification-body">
                      <b>Joy is cool</b> accepted your friend request
                      <small className="text-muted">2 Hours ago</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="Profile" />
                    </div>
                    <div className="notification-body">
                      <b>Joy is cool</b> commented on your dumb status
                      <small className="text-muted">2 Days ago</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="Profile" />
                    </div>
                    <div className="notification-body">
                      <b>Joy is cool</b> blocked you
                      <small className="text-muted">4 Days ago</small>
                    </div>
                  </div>

                  <div>
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="Profile" />
                    </div>
                    <div className="notification-body">
                      <b>Joy is cool</b> sent you another friend request
                      <small className="text-muted">2 Seconds ago</small>
                    </div>
                  </div>
                </div>
                {/* End Notifications Popup */}
              </a>

              <a className="menu-item" id="messages-notifications">
                <span>
                  <i className="uil uil-envelope">
                    <small className="notifications-count">6</small>
                  </i>
                </span>
                <h3>Messages</h3>
              </a>
              <a className="menu-item">
                <span><i className="uil uil-bookmark"></i></span>
                <h3>Saved</h3>
              </a>
              <a className="menu-item">
                <span><i className="uil uil-chart-line"></i></span>
                <h3>Analytics</h3>
              </a>
              <a className="menu-item">
                <span><i className="uil uil-palette"></i></span>
                <h3>Theme</h3>
              </a>
              <a className="menu-item">
                <span><i className="uil uil-setting"></i></span>
                <h3>Settings</h3>
              </a>
            </div>
            {/* End Sidebar */}

            {/* Create Post Button */}
            <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
          </div>
          {/* End Left Sidebar */}

          {/* Middle Content */}
          <div className="middle">
            {/* Stories */}
            <div className="stories">
              <div className="story">
                <div className="profile-photo"><img src="/logo192.png" alt="Story 1" /></div>
                <p className="name">Your Story</p>
              </div>
              <div className="story">
                <div className="profile-photo"><img src="/logo192.png" alt="Story 2" /></div>
                <p className="name">Joy is not dead</p>
              </div>
              <div className="story">
                <div className="profile-photo"><img src="/logo192.png" alt="Story 3" /></div>
                <p className="name">Joy is cool</p>
              </div>
              <div className="story">
                <div className="profile-photo"><img src="/logo192.png" alt="Story 4" /></div>
                <p className="name">cool is joy</p>
              </div>
              <div className="story">
                <div className="profile-photo"><img src="/logo192.png" alt="Story 5" /></div>
                <p className="name">joy stuff</p>
              </div>
              <div className="story">
                <div className="profile-photo"><img src="/logo192.png" alt="Story 6" /></div>
                <p className="name">stuff is joy</p>
              </div>
            </div>
            {/* End Stories */}

            {/* Create Post */}
            <form className="create-post">
              <div className="profile-photo">
                <img src="/logo192.png" alt="profile" />
              </div>
              <input type="text" placeholder="What's on your mind, Joy?" id="create-post" />
              <input type="submit" value="Post" className="btn btn-primary" />
            </form>

            {/* Feeds */}
            <div className="feeds">
              {/* Feed Template */}
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="User profile" />
                    </div>
                    <div className="info">
                      <h3>Joya joyzy</h3>
                      <small>Egypt, 20 MINUTES AGO</small>
                    </div>
                  </div>
                  <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                  </span>
                </div>

                <div className="photo">
                  <img src="/logo512.png" alt="Post image" />
                </div>

                <div className="action-button">
                  <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                  </div>
                  <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                  </div>
                  <p>Liked by <b>Joy is crazy</b> and <b>999 others</b></p>
                </div>

                <div className="caption">
                  <p><b>Joya Hoyzy</b> Hello I am getting crazy. <span className="harsh-tag">#Joyiscrazy</span></p>
                </div>

                <div className="comments text-muted">View all 99 comments</div>
              </div>

              {/* POST 2 */}
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="User profile" />
                    </div>
                    <div className="info">
                      <h3>Joya joyzy</h3>
                      <small>Egypt, 20 MINUTES AGO</small>
                    </div>
                  </div>
                  <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                  </span>
                </div>

                <div className="photo">
                  <img src="/logo512.png" alt="Post image" />
                </div>

                <div className="action-button">
                  <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                  </div>
                  <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                  </div>
                  <p>Liked by <b>Joy is crazy</b> and <b>999 others</b></p>
                </div>

                <div className="caption">
                  <p><b>Joya Hoyzy</b> Hello I am getting crazy. <span className="harsh-tag">#Joyiscrazy</span></p>
                </div>

                <div className="comments text-muted">View all 99 comments</div>
              </div>

              {/* POST 3*/}
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="User profile" />
                    </div>
                    <div className="info">
                      <h3>Joya joyzy</h3>
                      <small>Egypt, 20 MINUTES AGO</small>
                    </div>
                  </div>
                  <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                  </span>
                </div>

                <div className="photo">
                  <img src="/logo512.png" alt="Post image" />
                </div>

                <div className="action-button">
                  <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                  </div>
                  <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                  </div>
                  <p>Liked by <b>Joy is crazy</b> and <b>999 others</b></p>
                </div>

                <div className="caption">
                  <p><b>Joya Hoyzy</b> Hello I am getting crazy. <span className="harsh-tag">#Joyiscrazy</span></p>
                </div>

                <div className="comments text-muted">View all 99 comments</div>
              </div>

              {/* POST 4 */}
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="User profile" />
                    </div>
                    <div className="info">
                      <h3>Joya joyzy</h3>
                      <small>Egypt, 20 MINUTES AGO</small>
                    </div>
                  </div>
                  <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                  </span>
                </div>

                <div className="photo">
                  <img src="/logo512.png" alt="Post image" />
                </div>

                <div className="action-button">
                  <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                  </div>
                  <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                  </div>
                  <p>Liked by <b>Joy is crazy</b> and <b>999 others</b></p>
                </div>

                <div className="caption">
                  <p><b>Joya Hoyzy</b> Hello I am getting crazy. <span className="harsh-tag">#Joyiscrazy</span></p>
                </div>

                <div className="comments text-muted">View all 99 comments</div>
              </div>

              {/* POST 5 */}
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="User profile" />
                    </div>
                    <div className="info">
                      <h3>Joya joyzy</h3>
                      <small>Egypt, 20 MINUTES AGO</small>
                    </div>
                  </div>
                  <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                  </span>
                </div>

                <div className="photo">
                  <img src="/logo512.png" alt="Post image" />
                </div>

                <div className="action-button">
                  <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                  </div>
                  <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                  </div>
                  <p>Liked by <b>Joy is crazy</b> and <b>999 others</b></p>
                </div>

                <div className="caption">
                  <p><b>Joya Hoyzy</b> Hello I am getting crazy. <span className="harsh-tag">#Joyiscrazy</span></p>
                </div>

                <div className="comments text-muted">View all 99 comments</div>
              </div>

              {/* POST 6 */}
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="User profile" />
                    </div>
                    <div className="info">
                      <h3>Joya joyzy</h3>
                      <small>Egypt, 20 MINUTES AGO</small>
                    </div>
                  </div>
                  <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                  </span>
                </div>

                <div className="photo">
                  <img src="/logo512.png" alt="Post image" />
                </div>

                <div className="action-button">
                  <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                  </div>
                  <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                  </div>
                  <p>Liked by <b>Joy is crazy</b> and <b>999 others</b></p>
                </div>

                <div className="caption">
                  <p><b>Joya Hoyzy</b> Hello I am getting crazy. <span className="harsh-tag">#Joyiscrazy</span></p>
                </div>

                <div className="comments text-muted">View all 99 comments</div>
              </div>

              {/* POST 7 */}
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="User profile" />
                    </div>
                    <div className="info">
                      <h3>Joya joyzy</h3>
                      <small>Egypt, 20 MINUTES AGO</small>
                    </div>
                  </div>
                  <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                  </span>
                </div>

                <div className="photo">
                  <img src="/logo512.png" alt="Post image" />
                </div>

                <div className="action-button">
                  <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                  </div>
                  <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                  </div>
                  <p>Liked by <b>Joy is crazy</b> and <b>999 others</b></p>
                </div>

                <div className="caption">
                  <p><b>Joya Hoyzy</b> Hello I am getting crazy. <span className="harsh-tag">#Joyiscrazy</span></p>
                </div>

                <div className="comments text-muted">View all 99 comments</div>
              </div>

              {/* POST 8 */}
              <div className="feed">
                <div className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src="/logo192.png" alt="User profile" />
                    </div>
                    <div className="info">
                      <h3>Joya joyzy</h3>
                      <small>Egypt, 20 MINUTES AGO</small>
                    </div>
                  </div>
                  <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                  </span>
                </div>

                <div className="photo">
                  <img src="/logo512.png" alt="Post image" />
                </div>

                <div className="action-button">
                  <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                </div>
                  <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                  </div>
                  <p>Liked by <b>Joy is crazy</b> and <b>999 others</b></p>
                </div>

                <div className="caption">
                  <p><b>Joya Hoyzy</b> Hello I am getting crazy. <span className="harsh-tag">#Joyiscrazy</span></p>
                </div>

                <div className="comments text-muted">View all 99 comments</div>
              </div>

              {/* END OF FEED */}
            </div>
            {/* End Middle */}
          </div>

          {/* Right Sidebar */}
          <div className="right">
            {/* Messages */}
            <div className="messages">
              <div className="heading">
                <h4>Messages</h4>
                <i className="uil uil-edit"></i>
              </div>

              {/* Search Bar */}
              <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Search messages" id="messages-search" />
              </div>

              {/* Message Categories */}
              <div className="category">
                <h6 className="active">Primary</h6>
                <h6>General</h6>
                <h6 className="message-requests">Requests (7)</h6>
              </div>

              {/* MESSAGE */}
              <div className="message">
                <div className="profile-photo">
                  <img src="/logo192.png" alt="User photo" />
                </div>
                <div className="message-body">
                  <h5>Joya joy</h5>
                  <p className="text-muted">Good Morning</p>
                </div>
              </div>
              {/* MESSAGE */}
              <div className="message">
                <div className="profile-photo">
                  <img src="/logo192.png" alt="User photo" />
                </div>
                <div className="message-body">
                  <h5>Joya joy</h5>
                  <p className="text-muted">Good Morning</p>
                </div>
              </div>
              {/* MESSAGE */}
              <div className="message">
                <div className="profile-photo">
                  <img src="/logo192.png" alt="User photo" />
                </div>
                <div className="message-body">
                  <h5>Joya joy</h5>
                  <p className="text-muted">Good Morning</p>
                </div>
              </div>
              {/* MESSAGE */}
              <div className="message">
                <div className="profile-photo">
                  <img src="/logo192.png" alt="User photo" />
                </div>
                <div className="message-body">
                  <h5>Joya joy</h5>
                  <p className="text-muted">Good Morning</p>
                </div>
              </div>
              {/* MESSAGE */}
              <div className="message">
                <div className="profile-photo">
                  <img src="/logo192.png" alt="User photo" />
                </div>
                <div className="message-body">
                  <h5>Joya joy</h5>
                  <p className="text-muted">Good Morning</p>
                </div>
              </div>
            </div>
            {/* END Messages */}

            {/* Friend Requests */}
            <div className="friend-requests">
              <h4>Requests</h4>
              <div className="request">
                <div className="info">
                  <div className="profile-photo">
                    <img src="/logo192.png" alt="Request photo" />
                  </div>
                </div>
                <div>
                  <h5>Hajoora</h5>
                  <p className="text-muted">8 mutual connections</p>
                  <div className="action">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn">Decline</button>
                  </div>
                </div>
              </div>
            </div>
            {/* END Friend Requests */}
          </div>
          {/* END Right Sidebar */}
        </div>
      </main>
    </div>
  );
}

export default App;
