import React, { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import api from "../../utils/api";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("CreateReward");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab tab-bordered ${
            activeTab === "CreateEvent" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("CreateEvent")}
        >
          Create An Event
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "CreateReward" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("CreateReward")}
        >
          Create a Reward
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "UpdateReward" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("UpdateReward")}
        >
          Update a Reward
        </button>
      </div>
      <div className="form-container">
        {activeTab === "CreateEvent" && <CreateEventForm />}
        {activeTab === "CreateReward" && <CreateRewardForm />}
        {activeTab === "UpdateReward" && <UpdateRewardForm />}
      </div>
    </div>
  );
};

const CreateEventForm = () => {
  const { values, handleChange } = useForm({
    eventName: "",
  });
  const handleCreateEvent = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2 className="pass-form__title">Create An Event</h2>
      <form>
        <div>
          <label htmlFor="eventName" className="text-gray-600">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            className="w-full input input-bordered"
            placeholder="Enter Event Name"
            name="eventName"
            value={values.eventName}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="button"
            className="login__button w-full btn btn-primary"
            onClick={handleCreateEvent}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

const CreateRewardForm = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.getEvents().then((res) => {
      setEvents(res);
    });
  }, []);

  const { values, handleChange } = useForm({
    eventId: "",
    rewardId: "",
    rewardTitle: "",
    rewardLocation: "",
    rewardDescription: "",
    rewardImageUrl: "",
    rewardExtras: "",
    rewardTerms: "",
  });
  const handleCreateReward = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Reward</h1>
      <form onSubmit={handleCreateReward}>
        <div className="space-y-4">
          <div>
            <label htmlFor="eventId" className="text-gray-600">
              Event ID
            </label>
            <select
              type="select"
              id="eventId"
              name="eventId"
              className="w-full input input-bordered"
              value={values.eventId}
              onChange={handleChange}
            >
              {events.map((event) => {
                return <option value={event._id}>{event.eventName}</option>;
              })}
            </select>
          </div>
          <div>
            <label htmlFor="rewardTitle" className="text-gray-600">
              Reward Title
            </label>
            <input
              type="text"
              id="rewardTitle"
              name="rewardTitle"
              className="w-full input input-bordered"
              placeholder="Reward Title"
              value={values.rewardTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardLocation" className="text-gray-600">
              Reward Location
            </label>
            <input
              type="text"
              id="rewardLocation"
              name="rewardLocation"
              className="w-full input input-bordered"
              placeholder="Reward Location"
              value={values.rewardLocation}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardDescription" className="text-gray-600">
              Reward Description
            </label>
            <input
              type="text"
              id="rewardDescription"
              name="rewardDescription"
              className="w-full input input-bordered"
              placeholder="Reward Description"
              value={values.rewardDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardImageUrl" className="text-gray-600">
              Reward Image URL
            </label>
            <input
              type="text"
              id="rewardImageUrl"
              name="rewardImageUrl"
              className="w-full input input-bordered"
              placeholder="Reward Image URL"
              value={values.rewardImageUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardExtras" className="text-gray-600">
              Reward Extras
            </label>
            <input
              type="text"
              id="rewardExtras"
              name="rewardExtras"
              className="w-full input input-bordered"
              placeholder="Reward Extras"
              value={values.rewardExtras}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardTerms" className="text-gray-600">
              Reward Terms
            </label>
            <input
              type="text"
              id="rewardTerms"
              name="rewardTerms"
              className="w-full input input-bordered"
              placeholder="Reward Terms"
              value={values.rewardTerms}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Create Reward
          </button>
        </div>
      </form>
    </div>
  );
};

const UpdateRewardForm = () => {
  const [rewards, setRewards] = useState([]);

  const { values, handleChange } = useForm({
    rewardId: "",
    rewardTitle: "",
    rewardLocation: "",
    rewardDescription: "",
    rewardImageUrl: "",
    rewardExtras: "",
    rewardTerms: "",
  });

  useEffect(() => {
    api.getRewards().then((res) => {
      setRewards(res);
    });
  }, []);

  const handleUpdateReward = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Update Reward</h1>
      <form onSubmit={handleUpdateReward}>
        <div className="space-y-4">
          <div>
            <label htmlFor="rewardId" className="text-gray-600">
              Reward
            </label>
            <select
              id="rewardId"
              name="rewardId"
              className="w-full input input-bordered"
              placeholder="Reward ID"
              value={values.rewardId}
              onChange={handleChange}
            >
              {rewards.map((reward) => {
                return <option value={reward._id}>{reward.rewardTitle}</option>;
              })}
            </select>
          </div>
          <div>
            <label htmlFor="rewardTitle" className="text-gray-600">
              Reward Title
            </label>
            <input
              type="text"
              id="rewardTitle"
              name="rewardTitle"
              className="w-full input input-bordered"
              placeholder="Reward Title"
              value={values.rewardTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardLocation" className="text-gray-600">
              Reward Location
            </label>
            <input
              type="text"
              id="rewardLocation"
              name="rewardLocation"
              className="w-full input input-bordered"
              placeholder="Reward Location"
              value={values.rewardLocation}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardDescription" className="text-gray-600">
              Reward Description
            </label>
            <input
              type="text"
              id="rewardDescription"
              name="rewardDescription"
              className="w-full input input-bordered"
              placeholder="Reward Description"
              value={values.rewardDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardImageUrl" className="text-gray-600">
              Reward Image URL
            </label>
            <input
              type="text"
              id="rewardImageUrl"
              name="rewardImageUrl"
              className="w-full input input-bordered"
              placeholder="Reward Image URL"
              value={values.rewardImageUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardExtras" className="text-gray-600">
              Reward Extras
            </label>
            <input
              type="text"
              id="rewardExtras"
              name="rewardExtras"
              className="w-full input input-bordered"
              placeholder="Reward Extras"
              value={values.rewardExtras}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rewardTerms" className="text-gray-600">
              Reward Terms
            </label>
            <input
              type="text"
              id="rewardTerms"
              name="rewardTerms"
              className="w-full input input-bordered"
              placeholder="Reward Terms"
              value={values.rewardTerms}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Update Reward
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
