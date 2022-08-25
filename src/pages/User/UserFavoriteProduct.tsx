import { UserTab } from "../../components";
import Helmet from "../../Helmet";
import DefaultLayout from "../DefaultLayout";

const UserFavoriteProduct = () => {
  return (
    <DefaultLayout>
      <Helmet
        title="Favorite products"
        addPostfixTitle
        description="View all your favorite products"
      />
      <UserTab />
    </DefaultLayout>
  );
};

export default UserFavoriteProduct;
