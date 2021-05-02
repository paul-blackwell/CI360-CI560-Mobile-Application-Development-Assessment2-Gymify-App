import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomModal from './CustomModal';
import ModelBtnPrimary from './smallerComponents/ModelBtnPrimary';
import ModelBtnSecondary from './smallerComponents/ModelBtnSecondary';
import EditExerciseModalItem from '../components/EditExerciseModalItem';
import deleteExerciseFromWorkout from '../requests/deleteExerciseFromWorkout';

// Just testing something
import { WorkoutsContext } from '../context/workouts.context';


import { standardColors } from '../styles/colors';
let colors = standardColors;


const windowHeight = Dimensions.get('window').height;

// Just for testing this will come from the context
const DATA = [
    { title: 'Bench press', id: 1 },
    { title: 'Push-ups', id: 2 },
    { title: 'Oly bar front squat', id: 3 },
    { title: 'Leg Press machine', id: 4 },
    { title: 'Deadlift', id: 5 },
    { title: 'Running', id: 6 },
    { title: 'Plyobox jumps', id: 7 },
    { title: 'Leg Press machine', id: 8 },
    { title: 'Deadlift', id: 9 },
    { title: 'Running', id: 10 },
    { title: 'Plyobox jumps', id: 11 },
]


export default EditExerciseModal = ({ openModel, setOpenModel, currentExerciseSelected, selectedWorkout, parentWeek, setShowLoader, setUpdateContext }) => {


    // Get workouts context with will be an array with all of the workouts
    const { workoutPlan } = useContext(WorkoutsContext);


    // Make state for what the modal is displaying ie the Edit exercise menu... 
    const [modalDisplay, setModalDisplay] = useState('edit-exercise');

    // This will be used to store what exercise the user whats to swap
    const [swapExercise, setSwapExercise] = useState('');


    // This is what the flat this will render in FlatList as part of the Swap exercise 
    const renderItem = ({ item }) => (
        <EditExerciseModalItem
            title={item.title}
            setSwapExercise={setSwapExercise}
            setModalDisplay={setModalDisplay}
        />
    );


    /**
     * This will delete the exercise from the workout itself,
     * not the individual workout
     */
    const [deleteExercise, setDeleteExercise] = useState(false);
    useEffect(() => {
        if (deleteExercise) {
            deleteExerciseFromWorkout(
                parentWeek,
                selectedWorkout,
                currentExerciseSelected.id,
                workoutPlan.jwt,
                setShowLoader,
                setUpdateContext
            );

            setDeleteExercise(false); // then change the state back ro false
        }

    }, [deleteExercise]);




    if (modalDisplay === 'edit-exercise') {
        return (
            <CustomModal
                title='Edit exercise'
                open={openModel}
                setOpen={setOpenModel}
            >
                <View style={styles.mainContent}>
                    <TouchableOpacity style={styles.editOption} onPress={() => {
                        setModalDisplay('swap-exercise')
                    }}>
                        <AntDesign style={styles.editOptionIcon} name="swap" size={24} color={colors.gray[400]} />
                        <Text style={styles.editOptionText}>Swap Exercise</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editOption} onPress={() => {
                        setModalDisplay('delete-exercise');
                    }}>
                        <AntDesign style={styles.editOptionIcon} name="delete" size={24} color={colors.red[100]} />
                        <Text style={[styles.editOptionText, styles.editOptionTextRed]}>Delete exercise</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <ModelBtnSecondary title='Cancel' onPress={() => {
                        setOpenModel(false);
                    }} />
                </View>

            </CustomModal>
        );
    } else if (modalDisplay === 'swap-exercise') {
        return (
            <CustomModal
                title='Swap exercise'
                open={openModel}
                setOpen={setOpenModel}
            >
                <View style={{ maxHeight: (windowHeight / 3) * 2, }}>
                    <FlatList
                        style={{ marginBottom: 16 }}
                        data={DATA} //TODO: Change this it will have to come from the context
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()} // remove toString when data comes from context 
                    />
                </View>
                <View>
                    <ModelBtnSecondary title='Go back' onPress={() => {
                        setModalDisplay('edit-exercise');
                    }} />
                </View>
            </CustomModal>
        )
    } else if (modalDisplay === 'confirm-swap-exercise') {
        return (
            <CustomModal
                title='Swap exercise'
                open={openModel}
                setOpen={setOpenModel}
            >
                <View style={styles.mainContent}>
                    <Text style={styles.modelText}>Are you sure you want to swap the exercise
                    <Text style={styles.modelTextBold}> {currentExerciseSelected.title} </Text>
                    for
                    <Text style={styles.modelTextBold}> {swapExercise}</Text>?
                    </Text>
                </View>
                <View>
                    <ModelBtnPrimary title='Swap this exercise' color='green' onPress={() => {
                        // TODO: SWAP exercise out in context 
                        setModalDisplay('edit-exercise');
                        setOpenModel(false);
                    }} />
                    <ModelBtnSecondary title='Go back' onPress={() => {
                        setModalDisplay('swap-exercise');
                    }} />
                </View>
            </CustomModal>
        )
    } else if (modalDisplay === 'delete-exercise') {
        return (
            <CustomModal
                title='Delete exercise'
                open={openModel}
                setOpen={setOpenModel}
            >
                <View style={styles.mainContent}>
                    <Text style={styles.modelText}>Are you sure you want to delete  <Text style={styles.modelTextBold}> {currentExerciseSelected.title}</Text>? If you do, you can always add the it again using the “plus” button in the workout screen.</Text>
                </View>
                <View>
                    <ModelBtnPrimary title='Delete this exercise' onPress={() => {
                        // TODO: DELETE EXERCISE 
                        //dispatch({ type: 'DELETE_EXERCISE_FROM_WORKOUT', payload: {currentExerciseSelectedId: currentExerciseSelected.id } })
                        setDeleteExercise(true); // Trigger state change
                        setModalDisplay('edit-exercise')
                        setOpenModel(false)
                    }} />
                    <ModelBtnSecondary title='Go back to safety' onPress={() => {
                        setModalDisplay('edit-exercise')
                    }} />
                </View>
            </CustomModal>
        )
    }
}




const styles = StyleSheet.create({
    modelText: {
        fontSize: 18,
        color: colors.gray[300],
        fontFamily: 'Inter_400Regular'
    },
    modelTextBold: {
        fontSize: 18,
        color: colors.gray[400],
        fontFamily: 'Inter_800ExtraBold'
    },
    editOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    mainContent: {
        flex: 1,
        paddingTop: 16,
    },
    editOptionIcon: {
        marginRight: 12
    },
    editOptionText: {
        color: colors.gray[400],
        fontSize: 18,
    },
    editOptionTextRed: {
        color: colors.red[100]
    },
});