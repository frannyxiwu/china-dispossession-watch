import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import Media from 'react-media';
import { yuXiulanData } from '../../data/data/profiles/yu-xiulan';
import { baoHailanData } from '../../data/data/profiles/bao-hailan';
import { xuYulouData } from '../../data/data/profiles/xu-yulou';
import { zhouJinhuaData } from '../../data/data/profiles/zhou-jinhua';
import { yinBaimeiData } from '../../data/data/profiles/yin-baimei';

const Directory = () => {
  // Store profiles from your imported data objects.
  const [profiles] = useState([yuXiulanData, baoHailanData, xuYulouData, zhouJinhuaData, yinBaimeiData]);

  // State for currently selected profile (from marker click)
  const [selectedProfile, setSelectedProfile] = useState(null);

  // State for current language: 'en' or 'ch'
  const [currentLang, setCurrentLang] = useState('en');

  // ----- Tag Filter State -----
  // Create a mapping from english tag to chinese tag using profiles data.
  const tagMapping = {};
  profiles.forEach(profile => {
    (profile.tags || []).forEach(tagObj => {
      if (!tagMapping[tagObj.en]) {
        tagMapping[tagObj.en] = tagObj.ch;
      }
    });
  });

  // Extract all unique tags (using the English version as identifier)
  const allTagsSet = new Set();
  profiles.forEach(profile => {
    (profile.tags || []).forEach(tagObj => {
      allTagsSet.add(tagObj.en);
    });
  });
  const allTags = Array.from(allTagsSet);

  // State to store selected tags (as English strings)
  const [selectedTags, setSelectedTags] = useState([]);

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Clear all tag selections
  const clearSelections = () => {
    setSelectedTags([]);
  };

  // Filtering: only include profiles that have ALL selected tags.
  // If no tag is selected, show all profiles.
  const filteredProfiles = profiles.filter(profile => {
    if (selectedTags.length === 0) return true;
    const profileTagEn = (profile.tags || []).map(t => t.en);
    return selectedTags.every(tag => profileTagEn.includes(tag));
  });

  // Called when a marker is clicked in Map.
  const handleMarkerClick = (profileId) => {
    const foundProfile = filteredProfiles.find(p => p.id === profileId);
    setSelectedProfile(foundProfile);
  };

  // Helper: return a snippet (first paragraph) in the current language.
  const getDescriptionSnippet = (profile) => {
    if (!profile) return '';
    const descObj = profile.description.find(item => item.type === currentLang);
    return descObj ? descObj.default : '';
  };

  return (
    <Wrapper>
      <Media queries={{ small: '(max-width: 599px)', large: '(min-width: 600px)' }}>
        {matches => (
          <>
            <MapContainer>
              <Map 
                data={filteredProfiles} 
                onMarkerClick={handleMarkerClick}
              />
            </MapContainer>
            <SidePanel>
              {/* Language Toggle and Tag Filter Section */}
              <FilterAndToggleContainer>
                <ToggleContainer>
                  <ToggleButton
                    active={currentLang === 'en'}
                    onClick={() => setCurrentLang('en')}
                  >
                    English
                  </ToggleButton>
                  <ToggleButton
                    active={currentLang === 'ch'}
                    onClick={() => setCurrentLang('ch')}
                  >
                    中文
                  </ToggleButton>
                </ToggleContainer>
                <TagFilterContainer>
                  <FilterTitle>
                    {currentLang === 'en' ? "Filter by Tag" : "按标签筛选"}
                  </FilterTitle>
                  <TagsGrid>
                    {allTags.map(tag => (
                      <CheckboxLabel key={tag}>
                        <input
                          type="checkbox"
                          checked={selectedTags.includes(tag)}
                          onChange={() => toggleTag(tag)}
                        />
                        <span>{currentLang === 'en' ? tag : tagMapping[tag]}</span>
                      </CheckboxLabel>
                    ))}
                  </TagsGrid>
                  {selectedTags.length > 0 && (
                    <ClearButton onClick={clearSelections}>
                      {currentLang === 'en' ? "Clear Selections" : "清除选择"}
                    </ClearButton>
                  )}
                </TagFilterContainer>
              </FilterAndToggleContainer>

              {selectedProfile ? (
                <ProfileCard>
                  <h2>{currentLang === 'en' ? selectedProfile.name : selectedProfile.chName}</h2>
                  <p>{getDescriptionSnippet(selectedProfile)}</p>
                  <ReadMoreLink to={`/directory/${selectedProfile.id}`}>
                    {currentLang === 'en' ? "Read More →" : "阅读更多 →"}
                  </ReadMoreLink>
                </ProfileCard>
              ) : (
                <InfoMessage>
                  {currentLang === 'en'
                    ? "Click a marker to see details here."
                    : "点击地图标记查看详情。"}
                </InfoMessage>
              )}
            </SidePanel>
          </>
        )}
      </Media>
    </Wrapper>
  );
};

export default Directory;

/*────────────────────────────────────────────
   STYLED COMPONENTS
────────────────────────────────────────────*/

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const MapContainer = styled.div`
  flex: 3;
`;

const SidePanel = styled.div`
  flex: 2;
  border-left: 1px solid #ccc;
  padding: 16px;
  overflow-y: auto;
  background: #ffffff;
`;

const FilterAndToggleContainer = styled.div`
  margin-bottom: 16px;
`;

const ToggleContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 8px;
  background-color: ${props => props.active ? '#423f67' : '#fff'};
  color: ${props => props.active ? '#fff' : '#423f67'};
  border: 1px solid #423f67;
  font-size: 16px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const TagFilterContainer = styled.div`
  margin-bottom: 16px;
`;

const FilterTitle = styled.h3`
  margin: 16px 0 10px 0;
  font-family: 'Lora', serif;
  font-size: 16px;
  color: #423f67;
`;

const TagsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  input {
    margin-right: 6px;
  }
`;

const ClearButton = styled.button`
  padding: 6px 12px;
  background-color: #423f67;
  color: #fff;
  border: none;
  font-size: 14px;
  cursor: pointer;
  border-radius: 0px;
`;

const ProfileCard = styled.div`
  background: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  h2 {
    font-family: 'Lora', serif;
    font-size: 18px;
    margin-top: 0;
    color: #333;
  }
  p {
    font-size: 16px;
    color: #666;
    line-height: 1;
  }
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  margin-top: 12px;
  font-family: 'Lora', serif;
  font-weight: bold;
  font-size: 16px;
  color: #423f67;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const InfoMessage = styled.p`
  font-size: 1em;
  color: #888;
`;

{/* import styled from 'styled-components';
import ProfileList from './Components/ProfileList';
import HistoryTrail from './Components/HistoryTrail';
import HistoryTrailMobile from './Components/HistoryTrailMobile';
import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Map from '../Map/Map';
import { useRecoilState } from 'recoil';
import { trailValues } from '../../state/state';
import Media from 'react-media';

const Directory = ({data}) => {
    const [trail, setTrail] = useState([]);
    const [isHistoryTrailOpen, setHistoryTrailOpen] = useState(false);
    const [profileHovered, setProfileHovered] = useState(null);
    const [trailState, setTrailState] = useRecoilState(trailValues);

    const dragEnd = (result) => {
        if(!result.destination) return;
        if(!result.destination.droppableId) return;

        if(result.source.droppableId === 'scrollingMenuId') {
            const i = result.destination.index;
            const profiles = [...trail];
            let foundProfile = data.find(profile => profile.id === result.draggableId);

            if (trail.includes(foundProfile)) return;
            profiles.splice(i, 0, foundProfile);
            setTrail(profiles); 

        } else if (result.source.droppableId === 'profileContainerDrop') {
            const startIndex = result.source.index;
            const endIndex = result.destination.index;

            setTrail((trail) => {
                const profiles = [...trail];
                const [removed] = profiles.splice(startIndex, 1);
                profiles.splice(endIndex, 0, removed);
                return profiles;
              });
        }
    }

    const isProfileInTrail = (profile) => {
        return trail.includes(profile)
    }

    const removeFromTrail = (data) => {
        const tempArray = trail.filter(profile => profile !== data)
        setTrail(tempArray);
    }

    const addToTrail = (data, trail) => {
        if(isProfileInTrail(data)) {
            return
        } else {
            setTrail([...trail, data])
        }
    }

    useEffect(() => {
        if(trail.length === 0) return;

        if (!isHistoryTrailOpen) {
            setHistoryTrailOpen(true)
        }
    }, [trail])

    useEffect(() => {
        setTrailState({historyTrail: trail});
    }, [trail])

    useEffect(() => {
        if(
            trailState.historyTrail.length > 0 &&
            trail.length === 0
        ) {
            setTrail(trailState.historyTrail);
        }
    }, [])

    return (
        <Media 
            queries={{
                small: "(max-width: 599px)",
                large: "(min-width: 600px)"
            }}
        >
            {matches => (
                <>
                    <DragDropContext
                        onDragEnd={dragEnd}
                    >
                        <Wrapper>
                            <ProfileList
                                data={data}
                                profileHovered={profileHovered}
                                setProfileHovered={setProfileHovered}
                                isHistoryTrailOpen={isHistoryTrailOpen}
                                setHistoryTrailOpen={setHistoryTrailOpen}
                                trail={trail}
                                setTrail={setTrail}
                                isProfileInTrail={isProfileInTrail}
                                removeFromTrail={removeFromTrail}
                                matches={matches}
                            />
                            <Map 
                                data={data} 
                                profileHovered={profileHovered}
                                setProfileHovered={setProfileHovered}
                                isHistoryTrailOpen={isHistoryTrailOpen}
                            />
                                {matches.small && 
                                    <HistoryTrailMobile
                                        trail={trail}
                                        setTrail={setTrail}
                                        isProfileInTrail={isProfileInTrail}
                                        removeFromTrail={removeFromTrail}
                                        isOpen={isHistoryTrailOpen}
                                        setOpen={setHistoryTrailOpen}
                                        addToTrail={addToTrail}
                                    />
                                }
                                {matches.large && 
                                    <HistoryTrail
                                        trail={trail}
                                        setTrail={setTrail}
                                        isProfileInTrail={isProfileInTrail}
                                        removeFromTrail={removeFromTrail}
                                        isOpen={isHistoryTrailOpen}
                                        setOpen={setHistoryTrailOpen}
                                        addToTrail={addToTrail}
                                    />
                                }
                        </Wrapper>
                    </DragDropContext>
                </>
            )}
        </Media>
    )
}

export default Directory;

const Wrapper = styled.div`
    display: flex;
    transition: all .12s ease-in-out;
`
*/}