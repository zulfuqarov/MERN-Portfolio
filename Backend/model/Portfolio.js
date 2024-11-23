import mongoose from "mongoose";

const PortfolioSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  headerTitile: {
    type: String,
    default: "Add your title.",
  },
  headerDescription: {
    type: String,
    default: "write you own About description",
  },
  headerImg: {
    type: String,
    default: "https://ruvsp.ru/css/theme-InnoForum/img/emptyava.png",
  },
  aboutMeDescription: {
    type: String,
    default: "Write you own About me description",
  },
  aboutMeImg: {
    type: String,
    default: "https://ruvsp.ru/css/theme-InnoForum/img/emptyava.png",
  },
  serviceDescription: {
    type: String,
    default: "Write you own Services description",
  },
  service: {
    type: [
      {
        img: {
          type: String,
          default:
            "https://assets-global.website-files.com/6275222db3d827e224b5c025/6275222db3d827ac5eb5c0cb_product-image__no-photo-p-2600.webp",
        },
        name: {
          type: String,
          default: "Service Name",
        },
        description: {
          type: String,
          default: "Service Description",
        },
      },
    ],
    // default: [
    //   {
    //     img: "https://assets-global.website-files.com/6275222db3d827e224b5c025/6275222db3d827ac5eb5c0cb_product-image__no-photo-p-2600.webp",
    //     name: "Service Name",
    //     description: "Service Description",
    //   },
    // ],
  },
  myPortfolio: {
    type: [
      {
        image: {
          type: String,
          default:
            "https://assets-global.website-files.com/6275222db3d827e224b5c025/6275222db3d827ac5eb5c0cb_product-image__no-photo-p-2600.webp",
        },
      },
    ],
    validate: {
      validator: function (v) {
        return v.length <= 4;
      },
      message: "MyPortfolio array can only contain a maximum of 4 items.",
    },
    default: [
      {
        image: "https://assets-global.website-files.com/6275222db3d827e224b5c025/6275222db3d827ac5eb5c0cb_product-image__no-photo-p-2600.webp",
      },
    ],
  },
  myPortfolioDescription: {
    type: String,
    default: "Write you own Portfolio description",
  },
  myExperiencesDescription: {
    type: String,
    default: "Write you own Experiences description",
  },
  Experiences: {
    type: [
      {
        date: {
          type: Date,
          default: new Date(),
        },
        name: {
          type: String,
          default: "Experiences Name",
        },
        description: {
          type: String,
          default: "Experiences Description",
        },
      },
    ],
    // default: [
    //   {
    //     date: new Date(),
    //     experiencesName: "Experiences Name",
    //     experiencesDescription: "Experiences Description",
    //   },
    // ],
  },
  contactDescription: {
    type: String,
    default: "Write you own contact description",
  },
  contactAddres: {
    type: String,
    default: "Address",
  },
  contactEmail: {
    type: String,
    default: "Email",
  },
  contactPhone: {
    type: String,
    default: "Phone",
  },
  contactWebsite: {
    type: String,
    default: "Website",
  },
  footerAboutDescription: {
    type: String,
    default: "Write you own About description",
  },
  socialMedia: [
    {
      name: {
        type: String,
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
  ],
});

export default mongoose.model("Portfolio", PortfolioSchema);
