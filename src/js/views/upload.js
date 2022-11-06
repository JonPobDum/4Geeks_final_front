import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import  UploadAudio  from "../component/Test"


export const Uploader = () => <UploadAudio/>

