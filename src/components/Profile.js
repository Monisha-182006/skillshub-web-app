import "./Profile.css";

function Profile() {
  const name = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const mobile = localStorage.getItem("mobile");

  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-circle">
          {firstLetter}
        </div>

        <h2>{name}</h2>

        <p>📧 {email}</p>

        <p>📱 {mobile}</p>

        <button>Edit Profile</button>

      </div>

    </div>
  );
}

export default Profile;